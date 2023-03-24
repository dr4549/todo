<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" :to="{ name: 'Home' }"
        >정환님
      </router-link>

      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" :to="{ name: 'Todos' }"
            >Todos
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
