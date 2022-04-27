<script setup>
import Container from './components/Container.vue';
import Header from './components/Header.vue';
import Description from './components/Description.vue';
</script>

<template>
  <div class="bg-darker-blue">
    <Container>
      <img src="./assets/icon-star.svg" alt="" />
    </Container>
    <Container> 1 </Container>
    <Header>How did we do?</Header>
    <Description>
      Please let us know how we did with your support request. All feedback is
      appreciated to help us improve our offering!
    </Description>
  </div>
</template>
