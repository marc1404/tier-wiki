<style>
  html, body, .app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  body {
    font-family: 'Work Sans', sans-serif;
  }
</style>

<style scoped>
  .app {
    display: flex;
    flex-direction: row;
  }

  .aside {
    display: flex;
    flex-direction: column;
    border-right: 1px solid #dbdbdb;
    width: 350px;
  }

  .main {
    flex-grow: 1;
  }
</style>

<template>
  <div class="app">
    <aside class="aside">
      <nav>
        <div class="tabs is-large is-fullwidth">
          <ul>
            <li class="is-active">
              <a>
                <span class="icon is-medium">
                  <i class="fas fa-compass fa-lg"></i>
                </span>
              </a>
            </li>

            <li>
              <a>
                <span class="icon is-medium">
                  <i class="fas fa-user fa-lg"></i>
                </span>
              </a>
            </li>

            <li>
              <a>
                <span class="icon is-medium">
                  <i class="fas fa-heart fa-lg"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <Feed />
    </aside>

    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
  import Feed from './components/Feed.vue';

  export default {
    name: 'App',
    components: { Feed }
  };
</script>
