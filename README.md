# 🧘 Jerm Action
## _Summon monk to "Blessing" your code_
### This project is from [#SHiT6](https://stupidhackth.github.io/6)
#### Demo here: [jerm-demo](https://github.com/ST4RCHASER/jerm-demo)

Jerm is an github action add holy things to your code include with features:
- 👼 Customizable image and text 
- 🇹🇭 Thai lover
- ✨Very holy

## To use this action

This is an github action you need to create workflow file

```yaml
#.github/workflows/jerm.yml

on: push
jobs:
  push:
    name: push
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: st4rchaser/jerm-action@v6.0.0
```

After you push your will see new pull request created now you can merge it and get blessed 🙏 🙇   

## `.monk` Config
You can customize monk whatever your need by create .monk directory
#### General configuration
General config has come with 3 properties it's call `Thailover`, `VeryHoly` and `ignore`
```javascript
// .monk/config.js

const config = {
    //Dangerous it's will replace all arabic numbers to thai numbers (0123456789 -> ๐๑๒๓๔๕๖๗๘๙)) may it make your code broken
    thaiLover: true,
    //Dangerous it's will add holy header to every unknown files and make your some file broken
    veryHoly: true,
    //Monk will ingore this (regex)
    ignore: [
        /^\.monk/,
        /^.gitingore/,
        /^readme.md'/,
        /^.prettierignore/
    ]
}
module.exports = config;
```

#### Customize header text
You can customize blessing text by create `.monk/ascii.txt`
#### Customize image
You can customize image by create `.monk/image.png`
#### Customize audio
You can customize audio by create `.monk/audio.mp3`