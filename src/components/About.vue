<template>
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-grow flex flex-col items-center justify-center min-h-screen space-y-8 bg-orange-200">
      <HeadingProps 
        title="Despre noi"
        class="text-4xl font-bold"
      />
      <Text
        text="DavidTheBarber este un salon de infrumusetare specializat in tunsori barbatesti si coafuri pentru barbati. 
        Cu o experienta de peste 10 ani in domeniu, echipa noastra de stilisti profesionisti iti ofera cele mai bune servicii de tuns si coafat, 
        pentru un look impecabil." 
        class="text-lg text-center max-w-2xl" 
        />  
        </main>
      <Footer />
    </div>
  </template>
  
  <script scoped>
  import Text from './TextProps.vue';
  import Footer from './Footer.vue';
  import Header from './Header.vue';
  import HeadingProps from './HeadingProps.vue';
  
  export default {
    components: {
      Header,
      Footer,
      HeadingProps,
      Text,
    },
  };
  </script>
  