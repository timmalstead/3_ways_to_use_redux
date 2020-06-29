import React from "react"
import Input from "./Components/Input"
import List from "./Components/List"
import { mainStyle, sectionStyle, inputAndButtonStyle } from "./style"

const App = () => (
  <main style={mainStyle}>
    <section style={sectionStyle}>
      <Input inputAndButtonStyle={inputAndButtonStyle} />
      <List inputAndButtonStyle={inputAndButtonStyle} />
    </section>
  </main>
)

export default App
