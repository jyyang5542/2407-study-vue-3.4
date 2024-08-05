# Vue 3.4 프로젝트 설정 가이드

## 프로젝트 생성 및 기본 설정

1.  **Vue 프로젝트 생성**

    터미널에서 다음 명령어를 실행하여 새로운 Vue 프로젝트를 생성합니다:

    ```sh
    npm install -g @vue/cli
    vue create study-vue
    ```

2.  **Vue 3.4 설치**
    프로젝트 디렉토리로 이동한 후 Vue 3.4 버전을 설치합니다:

    ```sh
    cd study-vue
    npm install vue@3.4
    ```

3.  **Vue Router 설치**
    Vue Router를 설치하여 라우팅 기능을 추가합니다:

    ```sh
    npm install vue-router@4
    ```

    `src` 디렉토리에 `router` 디렉토리를 만들고, `index.js` 파일을 생성합니다:

    ```sh
    mkdir src/router
    touch src/router/index.js
    ```

    `src/router/index.js` 파일에 다음 내용을 추가합니다:

    ```js
    import { createRouter, createWebHistory } from 'vue-router';
    import MyHome from '../views/MyHome.vue';

    const routes = [
      {
        path: '/',
        name: 'MyHome',
        component: MyHome,
      },
      {
        path: '/axios',
        name: 'MyAxios',
        component: MyAxios,
      },
    ];

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
    });

    export default router;
    ```

4.  **컴포넌트 및 라우터 설정**

    `src/views` 디렉토리에 `MyHome.vue`와 `MyAxios.vue` 파일을 생성합니다:

    ```sh
    mkdir src/views
    touch src/views/MyHome.vue
    touch src/views/MyAxios.vue
    ```

    `src/views/MyHome.vue` 파일에 다음 내용을 추가합니다:

    ```vue
    <template>
      <div class="home">
        <h1>Welcome to My Home Page</h1>
      </div>
    </template>

    <script>
    export default {
      name: 'MyHome',
    };
    </script>

    <style scoped>
    .home {
      h1 {
        color: green;
      }
    }
    </style>
    ```

    `src/views/MyAxios.vue` 파일에 다음 내용을 추가합니다:

    ```vue
    <template>
      <div>
        <h1>Axios API Example</h1>
        <button @click="fetchData">Fetch Data</button>
        <div v-if="loading">Loading...</div>
        <div v-if="error">{{ error }}</div>
        <ul v-if="data">
          <li v-for="item in data" :key="item.id">{{ item.title }}</li>
        </ul>
      </div>
    </template>

    <script>
    import axios from 'axios';

    export default {
      name: 'MyAxios',
      data() {
        return {
          data: null,
          loading: false,
          error: null,
        };
      },
      methods: {
        async fetchData() {
          this.loading = true;
          this.error = null;
          try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            this.data = response.data;
          } catch (err) {
            this.error = 'Error fetching data';
          } finally {
            this.loading = false;
          }
        },
      },
    };
    </script>

    <style scoped>
    button {
      margin-bottom: 1rem;
    }
    </style>
    ```

5.  **SCSS 설정**

    SCSS를 사용하기 위해 필요한 패키지를 설치합니다:

    ```sh
    npm install -D sass-loader sass
    ```

6.  **`App.vue` 수정**

    `App.vue` 파일을 수정하여 네비게이션 링크를 추가합니다:

    ```vue
    <template>
      <div id="app">
        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/axios">Axios Example</router-link>
        </nav>
        <router-view></router-view>
      </div>
    </template>

    <script>
    export default {
      name: 'App',
    };
    </script>

    <style>
    nav {
      margin-bottom: 1rem;
    }
    nav a {
      margin-right: 1rem;
    }
    </style>
    ```

7.  **`main.js` 파일 확인**

    `main.js` 파일이 다음과 같이 설정되어 있는지 확인합니다:

    ```js
    import { createApp } from 'vue';
    import App from './App.vue';
    import router from './router';

    createApp(App).use(router).mount('#app');
    ```

이제 [http://localhost:8080](http://localhost:8080)으로 이동하여 MyHome 페이지를, [http://localhost:8080/axios](http://localhost:8080/axios)으로 이동하여 Axios 예제를 확인할 수 있습니다.<br />
<br />
프로젝트를 실행하려면 터미널에서 다음 명령어를 실행합니다:

```sh
npm run dev
```
