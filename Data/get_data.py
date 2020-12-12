import os
import time
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import spotipy.util as util
import pandas as pd
from matplotlib import pyplot as plt
from dotenv import load_dotenv

load_dotenv()
REDIRECT_URI = "http://localhost:5000/"
CLIENT_ID = os.getenv('SPOTIFY_CLIENT_ID')
CLIENT_SECRET = os.getenv('SPOTIFY_CLIENT_SECRET')
USERNAME = ""
SCOPE = 'user-library-read playlist-read-private'

client_credentials_manager = SpotifyClientCredentials(
    client_id=CLIENT_ID, client_secret=CLIENT_SECRET)
spotify = spotipy.Spotify(
    client_credentials_manager=client_credentials_manager)

token = util.prompt_for_user_token(
    USERNAME, SCOPE, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)


def get_my_saved_tracks(token=token):
    if token:
        artist_name = []
        track_name = []
        popularity = []
        track_id = []
        num_tracks = 1000
        spotify = spotipy.Spotify(auth=token)

        for i in range(0, num_tracks, 50):
            track_results = spotify.current_user_saved_tracks(
                limit=50, offset=i)
            for item in track_results['items']:
                track = item['track']
                artist_name.append(track['artists'][0]['name'])
                track_name.append(track['name'])
                track_id.append(track['id'])
                popularity.append(track['popularity'])
    else:
        print("cant get token for", USERNAME)

    df_tracks = pd.DataFrame({
        'artist_name': artist_name,
        'track_name': track_name,
        'track_id': track_id,
        'popularity': popularity,
    })

    df_tracks[df_tracks.duplicated(
        subset=['artist_name', 'track_name'], keep=False)].count()

    return df_tracks


def append_features(df_tracks):
    rows = []
    batch = 50
    none_count = 0

    for i in range(0, len(df_tracks['track_id']), batch):
        batch_new = df_tracks['track_id'][i: i + batch]
        feature_results = spotify.audio_features(batch_new)

        for i, t in enumerate(feature_results):
            if t == None:
                none_count += 1
            else:
                rows.append(t)

    df_audio_features = pd.DataFrame.from_dict(rows, orient='columns')
    df_audio_features.rename(columns={'id': 'track_id'}, inplace=True)

    df = pd.merge(df_tracks, df_audio_features, on='track_id', how='inner')

    # plt.close('all')

    # df.plot.scatter(x='valence', y='popularity')
    # plt.show()
    return df
