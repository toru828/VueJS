<template>
  <div id="blog-post-demo" class="demo">
    <div :style="{ fontSize: postFontSize + 'em' }">
      <blog-post v-for="post in posts" @enlargeText="onEnlargeText"
                 :key="post.id"
                 :title="post.title"></blog-post>
    </div>
  </div>
</template>

<script>
import BlogPost from './BlogPost'
export default {
  name: 'BlogPostsList',
  components: {
    BlogPost
  },
  data () {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize: 1
    }
  },
  props: ['title'],
  methods: {
    onEnlargeText (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
}
</script>
