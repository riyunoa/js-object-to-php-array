# JsObjectToPhpArray
Convert Javascript object to a string in PHP array format

## Usage
```
import { jsObjectToPhpArray } from 'js-object-to-php-array';

let obj = {
    items: [
        {
            cat: 'meow'
        },
        {
            dog: 'woof'
        }
    ]
};

console.log(jsObjectToPhpArray(obj));
```

## Example input and output
Input (Javascript object)
```
{
    items: [
        {
            cat: 'meow'
        },
        {
            dog: 'woof'
        }
    ]
};
```

Output
```
[
    'items' => [
        [
            'cat' => 'meow'
        ],
        [
            'dog' => 'woof'
        ]
    ]
]
```
