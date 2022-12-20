const tasksInAnki = [
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/splice/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/splice/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/splice/3_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/splice/4_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/splice/5_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/sort/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/sort/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/some/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/some/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/slice/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/shift/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/reverse/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/reverse/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/reduceRight/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/reduceRight/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/reduceRight/3_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/reduceRight/4_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/reduceRight/5_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/reduce/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/reduce/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/reduce/3_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/reduce/4_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/push/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/push/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/pop/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/of/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/of/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/map/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/map/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/map/3_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/map/4_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/lastIndexOf/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/lastIndexOf/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/lastIndexOf/3_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/lastIndexOf/4_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/lastIndexOf/5_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/lastIndexOf/6_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/keys/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/keys/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/join/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/join/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/isArray/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/indexOf/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/indexOf/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/indexOf/3_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/indexOf/4_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/indexOf/5_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/indexOf/6_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/includes/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/includes/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/includes/3_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/includes/4_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/includes/5_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/forEach/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/forEach/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/from/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/from/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/from/3_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/from/4_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/from/5_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/from/6_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/flatMap/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/flatMap/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/flat/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/flat/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/flat/3_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/flat/4_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/flat/5_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/findLastIndex/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/findLastIndex/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/findLast/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/findLast/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/findIndex/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/findIndex/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/find/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/find/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/filter/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/filter/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/filter/3_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/filter/4_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/filter/5_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/fill/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/fill/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/fill/3_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/every/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/every/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/every/3_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/entries/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/copyWithin/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/copyWithin/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/copyWithin/3_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/concat/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/concat/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/concat/3_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/at/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/at/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/at/3_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/length/1_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/length/2_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/length/3_task.js',
  'jetbrains://web-storm/navigate/reference?project=jsPractice&path=mdn/JavaScript/Reference/Global_Objects/Array/length/4_task.js'
]
export default tasksInAnki
