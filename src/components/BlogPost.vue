<template>
  <div>
    <h4>{{ title }}</h4>
    <button @click="enlargeText()">
      Enlarge text
    </button>
  </div>

</template>

<script>
export default {
  name: 'BlogPost',
  data () {
    return {
    }
  },
  props: ['title'],
  methods: {
    enlargeText () {
      this.$emit('enlargeText', 0.1)
    }
  }
}
</script>
