
<p align="center">
  <h1 align="center"> Roadman - Log </h1>
</p>


## A roadman for logs using debug and chalk.

### How to use
```
yarn add @roadmanjs/log
```

anywhere.ts
```ts
import {log, chalk} from '@roadmanjs/log';

log("somevalue", "normal text")
log("somevalue", chalk.red("red text"))
```

or 

app.ts
```ts
import {roadman} from 'roadman'
import {logRoadman} from '@roadmanjs/log';

await roadman({
  roadmen: [logRoadman]
});
```

#### Env required
```sh
ROADMAN=myappname
DEBUG=myappname* 
```
