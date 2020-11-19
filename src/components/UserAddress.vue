.<template>
  <div class="address">
    <img :src="avatarUrl" class="img mr-1" />
    <small>{{ address }}</small>
  </div>
</template>

<script>
export default {
  name: 'UserAddress',
  props: ['address'],
  computed: {
    avatarUrl() {
      return `https://avatars.dicebear.com/api/jdenticon/${this.address}.svg`;
    },
  },
};
</script>

<style lang="scss" scoped>
.address {
  display: flex;
  align-items: center;

  .img {
    width: 16px;
    height: 16px;
  }
}
</style>
