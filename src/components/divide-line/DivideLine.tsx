import {defineComponent} from 'vue';


export default defineComponent({
    setup(props) {
        return () => (
            <hr {...props} style={"border-color: black;"} class={"devide-line"}/>
        )
    }
});
