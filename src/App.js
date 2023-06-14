import Thumb from "./components/Thumb";    // You have to import the Thumb component/function
import Video from "./components/Video";    // You have to import the Thumb component/function
import Image from "./components/Image";
function App() {                          // App function 
  return (                                // Returning 
    <div>
      <div>Hello</div>
                                 {/* Video Component : That is defined in the Component section of the Video.js   */}
      <Video></Video>
                                 {/* Thumb Component : That is defined in the Component section of the Video.js*/}
      <Thumb></Thumb>
      <Image></Image>
    </div>
  )
}
export default App;