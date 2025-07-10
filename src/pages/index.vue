<script lang="ts" setup>
import { ref } from 'vue'

const contact = ref({ name: '', email: '', message: '' })
const contactSuccess = ref(false)
const pets = [
  { name: 'Bella', type: 'Dog', img: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=400&q=80', desc: 'Friendly and playful Labrador.' },
  { name: 'Milo', type: 'Cat', img: 'https://images.unsplash.com/photo-1625060241508-22488e1e9264?auto=format&fit=crop&w=400&q=80', desc: 'Calm and cuddly tabby.' },
  { name: 'Coco', type: 'Parrot', img: 'https://images.unsplash.com/photo-1610460175286-5339c6c4f24f?auto=format&fit=crop&w=400&q=80', desc: 'Talkative and colorful parrot.' },
]
const testimonials = [
  { name: 'Alice', text: 'PetPawPal helped me find my best friend! The adoption process was smooth and the team was so supportive.', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Ben', text: 'Great selection of pet items and the blog is super helpful for new pet owners.', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Sara', text: 'I found a wonderful vet clinic through PetPawPal. Highly recommended!', avatar: 'https://randomuser.me/api/portraits/women/65.jpg' },
]
function submitContact() {
  contactSuccess.value = true
  setTimeout(() => (contactSuccess.value = false), 3000)
  contact.value = { name: '', email: '', message: '' }
}
</script>

<template>
  <!-- Hero Section -->
  <section class="tw:bg-gradient-to-br tw:from-indigo-500 tw:to-blue-400 tw:text-white tw:py-20 tw:px-4">
    <VContainer class="text-center">
      <h1 class="text-h2 font-weight-bold mb-4">Welcome to PetPawPal</h1>
      <p class="text-h5 mb-8">Your trusted companion for pet adoption, care, and community.</p>
      <VBtn color="primary" size="large" class="tw:mr-4">Adopt a Pet</VBtn>
      <VBtn color="secondary" size="large" variant="outlined">Explore Services</VBtn>
    </VContainer>
  </section>

  <!-- Services Section -->
  <section class="tw:py-16 tw:bg-white tw:dark:bg-neutral-900">
    <VContainer>
      <h2 class="text-h4 font-weight-bold text-center mb-10">Our Services</h2>
      <VRow class="text-center" align="center" justify="center">
        <VCol cols="12" md="4">
          <VCard class="pa-6" color="indigo-lighten-5" variant="tonal">
            <VIcon size="40" color="primary">mdi-paw</VIcon>
            <h3 class="text-h6 font-weight-bold mt-4 mb-2">Pet Adoption</h3>
            <p>Find your new best friend from our loving pet community.</p>
          </VCard>
        </VCol>
        <VCol cols="12" md="4">
          <VCard class="pa-6" color="blue-lighten-5" variant="tonal">
            <VIcon size="40" color="secondary">mdi-shopping</VIcon>
            <h3 class="text-h6 font-weight-bold mt-4 mb-2">Pet Item Shop</h3>
            <p>Shop for quality food, toys, and accessories for your pets.</p>
          </VCard>
        </VCol>
        <VCol cols="12" md="4">
          <VCard class="pa-6" color="indigo-lighten-5" variant="tonal">
            <VIcon size="40" color="primary">mdi-book-open-page-variant</VIcon>
            <h3 class="text-h6 font-weight-bold mt-4 mb-2">Blogs & Forum</h3>
            <p>Read tips, share stories, and connect with other pet lovers.</p>
          </VCard>
        </VCol>
        <VCol cols="12" md="4">
          <VCard class="pa-6" color="blue-lighten-5" variant="tonal">
            <VIcon size="40" color="secondary">mdi-map-marker-radius</VIcon>
            <h3 class="text-h6 font-weight-bold mt-4 mb-2">Pet Service Locations</h3>
            <p>Find clinics, salons, and rescue centers near you.</p>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </section>

  <!-- Example Pets Section -->
  <section class="tw:py-16 tw:bg-indigo-50 tw:dark:bg-neutral-800">
    <VContainer>
      <h2 class="text-h4 font-weight-bold text-center mb-10">Meet Our Lovely Pets</h2>
      <VRow justify="center">
        <VCol v-for="pet in pets" :key="pet.name" cols="12" sm="4">
          <VCard class="pa-4" hover>
            <VImg :src="pet.img" height="200" class="rounded-lg mb-4" cover />
            <h3 class="text-h6 font-weight-bold mb-1">{{ pet.name }}</h3>
            <div class="text-subtitle-2 mb-2">{{ pet.type }}</div>
            <p>{{ pet.desc }}</p>
            <VBtn color="primary" class="mt-3" size="small">Adopt Me</VBtn>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </section>

  <!-- Testimonials Section -->
  <section class="tw:py-16 tw:bg-white tw:dark:bg-neutral-900">
    <VContainer>
      <h2 class="text-h4 font-weight-bold text-center mb-10">What Our Users Say</h2>
      <VRow justify="center">
        <VCol v-for="t in testimonials" :key="t.name" cols="12" md="4">
          <VCard class="pa-6" variant="tonal">
            <div class="flex items-center mb-4">
              <VAvatar size="56" class="mr-4">
                <VImg :src="t.avatar" />
              </VAvatar>
              <div>
                <div class="font-weight-bold">{{ t.name }}</div>
              </div>
            </div>
            <blockquote class="italic">“{{ t.text }}”</blockquote>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </section>

  <!-- Contact Form Section -->
  <section class="tw:py-16 tw:bg-indigo-50 tw:dark:bg-neutral-800">
    <VContainer>
      <h2 class="text-h4 font-weight-bold text-center mb-10">Contact Us</h2>
      <VRow justify="center">
        <VCol cols="12" md="6">
          <VCard class="pa-8">
            <VForm @submit.prevent="submitContact">
              <VTextField v-model="contact.name" label="Name" required class="mb-4" />
              <VTextField v-model="contact.email" label="Email" type="email" required class="mb-4" />
              <VTextarea v-model="contact.message" label="Message" rows="4" required class="mb-4" />
              <VBtn color="primary" type="submit" block>Send Message</VBtn>
              <VAlert v-if="contactSuccess" type="success" class="mt-4">Thank you for contacting us!</VAlert>
            </VForm>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </section>
</template>

<route lang="yaml">
meta:
  layout: default
</route>