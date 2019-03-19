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
```
type Props = {
  children: any,
  style: Object,
  duration: number,
  startWhen: boolean,
  sets: Object,
  infinite: boolean,
  direction: string
}

```

 ## Options and props 🎁
 
Props | Value | Default | Description
--- | --- | --- | ---
duration | number | 300 | Play the audio track that matches the system language. If none match, play the first track.
startWhen | boolean | false | set when the animation should start, by default the animation start when the component mount.
infinite | boolean | false | Determine if the animation is infinite or just run once.
direction | string | 300 | specify the direction of the animation ex("toRight", "toLeft", "up","down).
sets | Object | `{from:0,to:180}` | set the point start and the end  of the animation, used with `Rotate` animation .

