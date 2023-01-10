React

vscode: add extension "Prettier". In settings type "formatter" and change "Editor: Default Formatter" to "Prettier".
___________________________
Создать компонент - CostItem.js, внутри создаем функцию "CostItem()" и экспортируем ее - "export default CostItem;"

Добавляем css-стили - 'import "./CostItem.css"'. Теперь с помощью className добавляем стили к элементам:
import "./CostItem.css"

function CostItem() {
    return (
        <div className="cost-item">
            <div>2022/03/01</div>
            <div className="cost-item__description">
                <h2>Fridge</h2>
                <div className="cost-item__price">$999.99</div>
            </div>
        </div>
    )
}

export default CostItem;
___________________________
{} - в реакте внутри фигурных скобок можно поместить js-выражение или переменную.

function CostItem() {
    const costDate = new Date(2021, 2, 12);
    const costDescription = "Refridgarator";
    const costAmount = 999.99;
    return (
        <div className="cost-item">
            <div>{costDate}</div>
            <div className="cost-item__description">
                <h2>{costDescription}</h2>
				<p>{2 + 3}</p> // = 5
                <div className="cost-item__price">${costAmount}</div>
            </div>
        </div>
    )
}
export default CostItem;
___________________________
Передача значений в компонент с помощью props:
В App.js при создании экземпляра компонента передаем туда параметры:
import CostItem from "./components/CostItem";

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Refrigerator",
      amount: 999.95
    }
  ];

  return (
    <div>
      <CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount}></CostItem>
    </div>
  );
}

export default App;

Далее в CostItem можем ссылаться на эти параметры и отображать их значения в компоненте:
function CostItem(props) { // props - указывает на то что мы будем использовать параметры 
    return (
        <div className="cost-item">
            <div>{props.date.toISOString()}</div> // props.date - это ссылка на значение date переменной costs
            <div className="cost-item__description">
                <h2>{props.description}</h2> // props.description - это ссылка на значение description переменной costs
                <div className="cost-item__price">${props.amount}</div> // props.amount - это ссылка на значение amount переменной costs
            </div>
        </div>
    )
}
___________________________
Теперь инкапсулируем дату в отдельном компоненте CostDate: 
function CostDate(props){
    const month = props.date.toLocaleString('ru-RU', {month: "long"});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('ru-RU', {day: "2-digit"});

    return (
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    );
}

export default CostDate;

В CostItem теперь ссылаемся на CostDate и передаем ему параметры через props:
...
import CostDate from "./CostDate";

function CostItem(props) {
    ...
            <CostDate date={props.date}/> // передаем параметры 
Т.о. мы передаем дату в компнент CostDate через компнент CostItem из компонента App.js.
___________________________
Еще один пример по props: В App.js создаем тег <Costs costs={costArray}/> и передаем ему параметр costs, в который ложим массив costArray. Теперь в компоненте Costs через props мы можем обращатся к элементам массива costArray так: props.costs[0].description 
___________________________
Композиция props.children
Создадим компонент Card, который будет инкапсулировать закругление и тень (свойства css):
function Card(props){ // передаем параметры
    const classes = 'card ' + props.className; // создаем список css-файлов с помощью props.className
    return <div className={classes}>{props.children}</div> //для вставки свойств внутрь компонента Card нужно использовать {props.children}
}
___________________________
function App() то же самое со стречоной функцией: const App = () => {}
___________________________


















