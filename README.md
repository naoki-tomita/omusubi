# omusubi

DI Container for JavaScript.

# how to use.

※Required decorator.

```ts
function main() {
    register(new Child()).as(Child);
    const parent = new Parent();

    parent.callChild(); 
}

abstract class Injectable {
    abstract foo();
}

class Child implements Injectable {
    foo() {
        console.log("foo");
    }
}

class Parent {
    @inject(Injectable)
    child!: Injectable;

    callChild() {
        this.child.foo();
    }
}
```
