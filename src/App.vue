<script setup>
import Container from './components/Container.vue';
import Header from './components/Header.vue';
import Description from './components/Description.vue';
import Card from './components/Card.vue';
import Button from './components/Button.vue';
import { ref } from 'vue';

const rating = ref(NaN);
const rated = ref(false);

function onRate(value) {
  rating.value = value;
}

function onSubmit() {
  if (rating.value) rated.value = true;
}
</script>

<template>
  <template v-if="!rated">
    <div
      class="flex h-screen w-screen items-center justify-center bg-very-dark-blue px-6"
    >
      <Card>
        <Container circle>
          <img src="./assets/icon-star.svg" alt="" />
        </Container>
        <div class="mt-4">
          <Header>How did we do?</Header>
        </div>
        <div class="mt-2">
          <Description>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </Description>
        </div>
        <div class="mt-6 flex justify-between">
          <Container v-for="n in 5" clickable :value="n" @clicked="onRate" circle>
            {{ n }}
          </Container>
        </div>
        <div class="mt-6">
          <Button @click="onSubmit">Submit</Button>
        </div>
      </Card>
    </div>
  </template>
  <template v-else>
    <div
      class="flex h-screen w-screen items-center justify-center bg-very-dark-blue px-6"
    >
      <Card>
        <div class="flex justify-center">
          <img src="./assets/illustration-thank-you.svg" alt="" />
        </div>
        <div class="mt-6 flex justify-center">
          <Container primary> You selected {{ rating.toString() }} out of 5</Container>
        </div>
        <div class="mt-6">
          <Header centered>Thank you!</Header>
        </div>
        <div class="mt-4">
          <Description centered>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </Description>
        </div>
      </Card>
    </div>
  </template>
</template>
