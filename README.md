# Up and running
Installera dependencies: `npm install`

Starta dev server: `ǹpm start`

Lyssna efter förändringar för att automatisk bygga en bundle: `npm run bundle`

För att köra tester `npm run test`

för att köra tester med test coverage `npm run coverage`

för att köra tester med test coverage i watch mode på endast förändrade filer sedan senaste commit `npm run converage-watch`

för att köra tester i watch mode på endast förändrade filer sedan senaste commit `npm run test-watch`

# Eslint
Har lagt till en eslint config som bygger på airbnb config. Airbnb's style guide
är den mest respekterade inom react communityt, generellt så bygger den på JS features
upp till ES7. Kolla så så att eran linter i er IDE har stöd för eslint. Finns även
bra plugins till bl.a Atom som fixar lint fel automatiskt varje gång man sparar.
Lintern tvingar singleqiote (') så ni kan kolla om den fungerar genom att lägga till
ett dubblequote (") någonstans och se om den reagerar på det, gör den inte det så
kan det hända att ni måste installera ett ESlint plugin till er IDE.

# Prettier

ESLint använder sig av prettier. Installera Prettier för er IDE, och kolla hur instruktionerna för hur man gör för att automatiskt formatera kod.
Så slipper ni krångla med stil-varningar.

[Prettier for WebStorm](https://prettier.io/docs/en/webstorm.html)

[Prettier for SubLime Text](https://packagecontrol.io/packages/JsPrettier)

[Prettier for Atom](https://github.com/prettier/prettier-atom)

# Nuvarande React stack
- React
- ReactDom
- Styled Components
- React Router

# Nuvarande Test stack
- Jest
- Enzyme

# Nuvarande Config stack
- Babel
- ESLint
- Prettier
- WebPack
- WebPack Dev Server

Note: React router har genomgått ganska stora förändringar senaste tiden så om ni undrar nått om det så kan ni fråga mig eller googla "react router version 4".
(finns mycket information på google om gamla versioner, så lätt man läser om fel)

# Module loaders
- Webpack

Configured features
- Transpilerar JSX till JavaScript
- Hotreloading
- Auto reloading
- Web server
- Babel, JS till es2015
- Accpeterar import av .jsx filer
- Babel, Support för class transform properties (ES7)
- Bygger bundle redå för produktion.

# Generell Applikations struktur & info.
Har har försökt sätta upp en grund / exempel componentet så snarlik som jag brukar göra det som möjligt. - Följer alla "best practices" inom React communityt som jag känner till.

## Folder Struktur

**Routes ->** Routes

**constants ->** Konstanter främst för CSS/styled components, fonts, färger etc för att underlätta att alla använder samma fonter, färg schema etc

**elements ->** Specifik för styled-components projekt. Innehåller komponenter som endast håller styles för ett specifikt html element (se mapp för exempel)

**components, containers och pages ->** Ska försöka förklara detta på ett bra sätt. Börja med att kolla: https://reactjs.org/docs/thinking-in-react.html pages är hela sidor som användes i routes. Dessa kan vara antingen class components eller stateless components. containers innehåller i normala fall class components som ligger lägre i hirarkin än pages. men eftersom vi ev. kommer behöva lägg till redux så tror jag det bliv enklast om vi bara kör pages som class components - så container ligger endast med som exempel. components innehåller endast stateless components, varje sub-folder har en index fil som är stateless component medans resterande filed är styled-components som är specifika för index.

## Struktur i filer

**PropTypes ->** Defineras som ett object ovanför komponenten för att göra det enkelt att se typer i stora komponenter. Sedan setts propTypes längst ner i filen precis innan export (se LoginForm för exempel)


**Object destructuring ->** används för props, för att jag dem mer lätt använda (se SubmitButton för exempel)


**Arrow functions ->** används för att slippa binda this i class componets (se LoginPage)

**ES7 class properties ->** används för att slippa constructor (se LoginPage)

**.jsx extensions ->** används för att tydligt visa vilka filer som är komponenter och vilka som är vanilla js.

## Exempel

Hur man förlänger en annan komponent med styled components -> se MenuItem

Hur man använder props i styled components -> se Text

# Auth och API
- libs/Client används för API/POST/GET.
- libs/Auth används för Auth.

- Exempel för hur man skickar POST utan data finns i pages/RegisterPage
- Exempel för hur man skickar POST med data finns i pages/LoginPage
- Exempel för hur man skickar GET finns i pages/CompaniesPage

# Komma igång med tester
[How to Test React Components Using Jest](https://www.sitepoint.com/test-react-components-jest/)

# Att skriva bra tester för react
[The Right Way to Test React Components](https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22)

# Vad är snapshot testing?
[Jest - Snapshot testing](https://facebook.github.io/jest/docs/en/snapshot-testing.html)
[Jest - Snapshot testing React components with enzyme](https://www.jstwister.com/post/jest-snapshot-testing-with-enzyme/)

# Test CheckList (Unit Tests/Semi integration tests)

- Testa så att komponenten är definerad/renderad
- Renderar komponenten olika saker, beronde på olika faktorer (if/ternary) - Test det
- Testa så att komponenten skriver ut props där den ska
- Testa så att komponenten uppdaterar state när den ska
- Testa så att komponenten skriver ut state där den ska
- Testa user interactions (klick etc)
- Testa så att metoder som skickas till komponenten via prop fungerar som de ska.
- Testa så att lifecycle metoder gör det dom ska (componentDidMount etc)
- Testa så att child components får rätt props (integration test)
- Testa så att child components finns med i komponentent (integration test)
- Testa props baserade styles i styled components
-
- 100% Test Coverage? Långt ifrån? Nära nog? Sikta på minst 80%

# Exempel på tester

## Tester som testar render
Se: Modal, ErrorMessage/Text

## Tester som testar Props
Se: ErrorMessage, List, SubmitButton

## Tester som testar links och routes
NavBar, Routes

## Tester för props baserade styles
Text, PageTitle, NavBar/Container, NavBar/MenuItem

## Tester som använder mocks för funktioner. onChange, onClick, onSubmit etc
TextInput, LoginForm, RegisterForm
