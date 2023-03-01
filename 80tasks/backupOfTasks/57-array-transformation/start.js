import assert from "assert";
/** ЗАДАЧА 57 - Трансформация массива объектов
 *
 * 1. Создайте функцию "processPosts", которая будет возвращать новый массив сообщений
 *
 * 2. Обратите внимание, что
 *  - некоторые имена свойств в каждом сообщении изменены
 *  - ID каждого сообщения увеличен на 1000
 *
 * 3. Исходный массив постов должен остаться без изменений
 */

const testPosts = [
  {
    postId: 234,
    author: "robd",
    commentsQty: 5
  },
  {
    postId: 823,
    author: "sady"
  },
  {
    postId: 161,
    author: "merryl",
    commentsQty: 8
  }
];

const processPosts = (sourceArr) => {
  //TODO write code here
};

assert.deepEqual(processPosts(testPosts), [
    {
      postId: 1234,
      postAuthor: "robd",
      postCommentsQty: 5
    },
    {
      postId: 1823,
      postAuthor: "sady",
      postCommentsQty: 0
    },
    {
      postId: 1161,
      postAuthor: "merryl",
      postCommentsQty: 8
    }
  ]);
assert.deepEqual(testPosts, [
  {
    postId: 234,
    author: "robd",
    commentsQty: 5
  },
  {
    postId: 823,
    author: "sady"
  },
  {
    postId: 161,
    author: "merryl",
    commentsQty: 8
  }
]);
