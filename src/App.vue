<script setup>
import Container from './components/Container.vue';
import Header from './components/Header.vue';
import Description from './components/Description.vue';
import Card from './components/Card.vue';
import Button from './components/Button.vue';
</script>

<template>
  <div
    class="flex h-screen w-screen items-center justify-center bg-very-dark-blue px-6"
  >
    <Card>
      <Container>
        <img src="./assets/icon-star.svg" alt="" />
      </Container>
      <div class="mt-4">
        <Header>How did we do?</Header>
      </div>
      <div class="mt-2">
        <Description>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Description>
      </div>
      <div class="mt-6 flex justify-between">
        <Container clickable v-for="n in 5"> {{ n }} </Container>
      </div>
      <div class="mt-6">
        <Button>Submit</Button>
      </div>
    </Card>
  </div>
</template>
