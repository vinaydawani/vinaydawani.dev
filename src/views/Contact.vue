<template>
  <section class="flex flex-col w-auto justify-center gap-y-4 mt-4">
    <div
      class="
        text-6xl
        font-light font-montserrat
        text-center
        tracking-wide
        text-off-white
      "
    >
      Get in <span class="font-semibold text-weird-red">touch</span>...
    </div>
    <div class="mx-5 px-28">
      <form name="contact-form" class="flex flex-col gap-y-6">
        <div class="flex flex-row flex-grow w-full gap-x-16">
          <div
            class="w-1/2 border-b-2 text-off-white font-mukta text-lg leading-6"
          >
            <label for="name" class="font-medium tracking-wide"
              >Full Name</label
            >
            <input type="text" name="name" class="w-full input-style" />
          </div>
          <div class="w-1/2 border-b-2 text-off-white font-mukta text-lg">
            <label for="email" class="font-medium tracking-wide">Email</label>
            <input
              type="email"
              name="email"
              class="w-full input-style"
              required
            />
          </div>
        </div>
        <div class="w-full border-b-2 text-off-white font-mukta text-lg">
          <label for="subject" class="font-medium tracking-wide">Subject</label>
          <input type="text" name="subject" class="w-full input-style" />
        </div>
        <div class="w-full border-b-2 text-off-white font-mukta text-lg">
          <label for="content" class="font-medium tracking-wide">Message</label>
          <textarea
            name="content"
            cols="30"
            rows="3"
            class="w-full input-style"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            class="
              text-center
              w-max
              border-2
              rounded
              py-3
              px-12
              place-self-center
              cursor-pointer
              font-mukta font-medium
              text-off-white text-base
              tracking-widest
              btn-transition
            "
          >
            Send!
          </button>
        </div>
      </form>
    </div>
  </section>
  <section class="flex flex-col w-auto place-items-center mt-16">
    <div
      class="
        text-6xl
        font-light font-montserrat
        text-center
        tracking-wide
        text-off-white
      "
    >
      ...or <span class="font-semibold text-weird-red">find</span>me at
    </div>
    <div class="flex flex-row gap-x-12 mt-12">
      <div>
        <a
          href="https://discordapp.com/users/584894676885176320/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
        >
          <ion-icon name="logo-discord" class="self-center"></ion-icon>
          <div class="self-center">Discord</div></a
        >
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/vinaydawani"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          ><ion-icon name="logo-linkedin" class="self-center"></ion-icon>
          <div class="self-center">LinkedIn</div></a
        >
      </div>
      <div>
        <a
          href="https://github.com/vinaydawani/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          ><ion-icon name="logo-github" class="self-center"></ion-icon>
          <div class="self-center">Github</div></a
        >
      </div>
      <div>
        <a href="mailto:vinaydawani@outlook.com" class="social-link"
          ><ion-icon name="mail-outline" class="self-center"></ion-icon>
          <div class="self-center">Email</div></a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.input-style {
  @apply focus:outline-none appearance-none bg-transparent border-none font-light tracking-wider pb-1 pt-2;
}
.social-link {
  @apply flex text-off-white text-2xl tracking-wider font-mukta gap-x-2;
}
.social-link {
  transition: transform 0.5s ease-out;
}
.social-link ion-icon {
  transition: transform 0.5s ease-out;
}
.social-link:hover {
  transform: scale(1.2);
}
.social-link:hover ion-icon {
  transform: rotate(360deg);
}
</style>
