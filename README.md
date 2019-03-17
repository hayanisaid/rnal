## A React Native animation library that aime to make using Animation API easly 🚀


# Installation ⚓️
- NPM
```
npm -i rnal --save
```

- Yarn
```
yarn add rnal
```

# Simple Usage 🗝

## 🎈 Fade  🎈
```
import { Fade } from "rnal";
export default class App extends Component<Props, State> {
  state = {
    ready: false
  };
  render() {
    let { ready } = this.state;
    return (
      <View style={{flex:1}}>
        <Fade >
          <Image
            source={require("./images/flowrs.jpg")}
            height={200}
            width={450}
            style={{ width: 350, height: 200 }}
            resizeMode="cover"
          />
        </Fade>
      </View>
    );
  }
}


```

 ## Options and props 🎁
 
