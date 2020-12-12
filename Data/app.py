import dash_html_components as html
import dash_core_components as dcc
import dash
import plotly.express as px
import pandas as pd
from dash.dependencies import Input, Output

from Data import get_data

app = dash.Dash(__name__)

df_tracks = get_data.get_my_saved_tracks()
df = get_data.append_features(df_tracks)

available = list(df.columns)

# fig = px.scatter(df, x='track_name', y='valence',
#                  color='popularity', hover_name='track_name')

app.layout = html.Div(children=[
    # html.H1(children="hello Dash"),

    # html.Div(children='''dash: webapp'''),

    # dcc.Graph(id='ex', figure=fig, style={'height': 700}),

    # html.Iframe(
    #     src=f'https://open.spotify.com/embed/track/1QNoKVgA758HFLu3TW2q7R', height=250)
    html.Div([
        html.H4("Select x variable"),
        dcc.Dropdown(
            id='xaxis_column',
            options=[{'label': i, 'value': i} for i in available[3:15]],
            value='valence'
        ),

        html.H4("Select y variable"),
        dcc.Dropdown(
            id='yaxis_column',
            options=[{'label': i, 'value': i} for i in available[3:15]],
            value='valence'
        )
    ]),

    dcc.Graph(id='indicator-graphics'),

    html.Div([
        html.Iframe(id='click-song', src='', height=250,
                    style={'display': 'block', 'margin': '0 auto'})
    ], style={'width': '100%'})
])


@app.callback(
    Output('indicator-graphics', 'figure'),
    Input('xaxis_column', 'value'),
    Input('yaxis_column', 'value')
)
def update_graph(xaxis_column_name, yaxis_column_name):
    fig = px.scatter(df, x=xaxis_column_name, y=yaxis_column_name,
                     hover_name='track_name')
    return fig


@app.callback(
    Output('click-song', 'src'),
    Input('indicator-graphics', 'clickData')
)
def display_click_data(clickData):
    name = clickData['points'][0]['hovertext']
    id_song = df.loc[df['track_name'] == name, 'track_id'].iloc[0]
    return f'https://open.spotify.com/embed/track/{id_song}'


if __name__ == "__main__":
    app.run_server()
