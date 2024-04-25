/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface componentObj {
    title: string;
    [prop: string]: string | number | boolean;
}

class Component<T> {
    constructor(public props: T) {}
}

class Page extends Component<componentObj> {
    pageInfo() {
        console.log(this.props.title);
    }
}

export {};
