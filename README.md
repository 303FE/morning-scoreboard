# morning-scoreboard
Angular scoreboard component . Good morning

![](https://i.imgur.com/ubMmbw1.gif)

Install

```
npm install morning-scoreboard --save
```



## Use

### 1.import 导入

```
import { MorningScoreboardComponent } from 'morning-scoreboard';


@NgModule({
  declarations: [
    ...,
    MorningScoreboardComponent
  ]
})
```



### 2.In component

```
<morning-scoreboard [score]="score" [second]="second"></morning-scoreboard>
```



## Setting



| propsName | required | default |      type       |
| :-------: | :------: | :-----: | :-------------: |
|   score   |   true   |  null   | Number\| String |
|  second   |  false   |   1.2   |     Number      |