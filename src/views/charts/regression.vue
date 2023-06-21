<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1><el-button>Default</el-button></h1>
    <h1><el-table
      :data="tableData"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="name"
        label="姓名"
        width="100"
      />
      <el-table-column
        prop="age"
        label="年龄"
        width="100"
      />
      <el-table-column
        prop="address"
        label="地址"
      />
      <el-table-column
        prop="address"
        label="地址"
      />
      <el-table-column
        prop="address"
        label="地址"
      />
    </el-table></h1>
  </div>
</template>

<script>

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]
export default {
  data() {
    return {
      tableData: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
          tags: ['nice', 'developer']
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 2 Lake Park, London No. 2 Lake Park',
          tags: ['loser']
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher']
        }
      ]
    }
  }
}
</script>
