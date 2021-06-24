import { ref, defineComponent } from 'vue'
import { useRouter } from "vue-router";
export default  defineComponent({
  props: {},
  setup (props, context) {
    const aaa = ref({ value: 0 })
    const router = useRouter()
    aaa.value.value++
    return () => ['88888888888888888', <div onClick={() => router.push('/about_home')}>about_home</div>]
  },
  methods: {
    jump () { console.log(this) }
  }
})