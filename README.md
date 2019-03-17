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
 
Type | Value | Description
--- | --- | ---
"system" (default) | N/A | Play the audio track that matches the system language. If none match, play the first track.
"disabled" | N/A | Turn off audio
"title" | string | Play the audio track with the title specified as the Value, e.g. "French"
"language" | string | Play the audio track with the language specified as the Value, e.g. "fr"
"index" | number | Play the audio track with the index specified as the value, e.g. 0
 
