# Jada Guerzoni — Interactive 3D Portfolio

A floating XR workshop built with [three.js](https://threejs.org/) (r128). Every object in the scene opens a project, the skills overview or the contact card.

## Openen

1. Open deze map in **Visual Studio Code** (`File → Open Folder…`).
2. Installeer de extensie **Live Server** (Ritwick Dey).
3. Klik rechts op `index.html` → **Open with Live Server**.

Je kunt `index.html` ook gewoon dubbelklikken, maar via Live Server herlaadt de pagina automatisch bij elke wijziging.

> Er is internet nodig: three.js en de lettertypes worden van een CDN geladen.

## Structuur

```
index.html          markup (top bar, panel, modal)
css/style.css       alle styling (kleuren staan als variabelen in :root)
js/main.js          de 3D-scène, de objecten, de avatar en alle interactie
js/images.js        paden + alt-teksten van de projectfoto's
assets/img/         projectfoto's
favicon.svg         JG.-icoon
```

## Waar pas je wat aan?

| Wat | Waar in `js/main.js` |
|---|---|
| Projectteksten, stack, secties | `const PROJECTS = { … }` bovenaan |
| Skills | `const SKILLS = [ … ]` |
| E-mail, telefoon, LinkedIn, GitHub | `EMAIL`, `PHONE`, `LINKEDIN`, `GITHUB` bovenaan |
| About-tekst | `VIEWS.about` |
| Avatar (haar, gezicht, kleding) | blok `/* Stylised avatar of Jada — About */` |
| Camerastandpunt per object | de `reg("…", …)`-aanroep onderaan elk objectblok |

Kleuren en lettertypes: `:root` bovenaan `css/style.css`.

## Online zetten (GitHub Pages)

Push de map naar een GitHub-repository en zet **Settings → Pages → Deploy from branch** aan. `index.html` staat in de root, dus het werkt meteen.
