import { defineComponent } from "vue";
import { HelloWorld } from "./components/HelloWorld";

export const App = defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  render() {
    return (
      <div id="app">
        aa
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
      </div>
    );
  },
});
