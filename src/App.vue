<script setup>
import Container from './components/Container.vue';
import Header from './components/Header.vue';
import Description from './components/Description.vue';
import Card from './components/Card.vue';
</script>

<template>
  <div
    class="flex h-screen w-screen items-center justify-center bg-very-dark-blue p-4"
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
          Please let us know how we did with your support request. All feedback is
          appreciated to help us improve our offering!
        </Description>
      </div>
      <div class="flex justify-between mt-6">
        <Container> 1 </Container>
        <Container> 2 </Container>
        <Container> 3 </Container>
        <Container> 4 </Container>
        <Container> 5 </Container>
      </div>
    </Card>
  </div>
</template>
