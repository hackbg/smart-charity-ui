.<template>
  <b-loading is-full-page v-model="isLoading"></b-loading>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Loading',
  computed: {
    ...mapState({
      isLoading: state => state.loading,
    }),
  },
};
</script>
