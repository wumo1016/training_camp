<template>
  <div style="height: 100%; padding: 20px; background: #fff">
    <el-tree
      class="tree-line1"
      :data="data"
      :props="defaultProps"
      :indent="0"
      default-expand-all
      @node-click="handleNodeClick"
    >
      <template class="custom-tree-node" #default="{ node, data }">
        <div class="node_test">
          <span class="icon_box" v-if="node.childNodes.length">
            <span v-if="node.expanded" style="position: relative; top: -1px"
              >-</span
            >
            <span v-else>+</span>
          </span>
          <span>
            {{ node.label }}
          </span>
        </div>
      </template>
    </el-tree>
  </div>
</template>

<script lang="ts" setup>
interface Tree {
  label: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const getData = (node, data) => {
  console.log(node, data)
  return node.label
}

const data: Tree[] = [
  {
    label: '1',
    children: [
      {
        label: '1-1',
        children: [
          {
            label: '1-1-1'
          }
        ]
      }
    ]
  },
  {
    label: '2',
    children: [
      {
        label: '2-1',
        children: [
          {
            label: '2-1-1'
          }
        ]
      },
      {
        label: '2-2',
        children: [
          {
            label: '2-2-1'
          }
        ]
      },
      {
        label: '2-3'
      }
    ]
  },
  {
    label: '3',
    children: [
      {
        label: '3-1',
        children: [
          {
            label: '3-1-1',
            children: [
              {
                label: '123'
              }
            ]
          }
        ]
      },
      // {
      //   label: '3-2',
      //   children: [
      //     {
      //       label: '3-2-1'
      //     },
      //     {
      //       label: '3-2-2'
      //     }
      //   ]
      // }
    ]
  },
  {
    label: '4',
    children: [
      {
        label: '4-1',
        children: [
          {
            label: '4-1-1',
            children: [
              {
                label: '123'
              }
            ]
          }
        ]
      },
      {
        label: '4-2',
        children: [
          {
            label: '3-2-1'
          }
        ]
      }
    ]
  }
]

const defaultProps = {
  children: 'children',
  label: 'label'
}
</script>

<style lang="scss">
.tree-line1 {
  .el-tree-node {
    position: relative;
    padding-left: 14px; // 缩进量
  }
  .el-tree-node__children {
    padding-left: 16px; // 缩进量
  }
  // 竖线
  .el-tree-node {
    // content: '';
    // height: calc(100% - 1px);
    // width: 1px;
    // position: absolute;
    // left: 30px;
    // top: -26px;
    // border-width: 1px;
    // border-left: 1px dotted #52627c;
    &::before {
      content: '';
      height: calc(100% - 20px);
      width: 1px;
      position: absolute;
      left: 30px;
      top: 23px;
      border-width: 1px;
      border-left: 1px dotted #52627c;
    }
    &:last-child {
      &::before {
        height: calc(100% - 40px);
      }
    }
  }
  // 横线
  .el-tree-node::after {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    left: 0;
    top: 12px;
    border-width: 1px;
    border-top: 1px dotted #52627c;
  }
  // 去掉最顶层的虚线，放最下面样式才不会被上面的覆盖了
  > .el-tree-node {
    &::after {
      border-top: none;
    }
  }
  // 展开关闭的icon
  .el-tree-node__expand-icon {
    display: none;
  }
  .node_test {
    padding-left: 10px;
    .icon_box {
      display: inline-block;
      width: 14px;
      height: 14px;
      border: 1px solid gray;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: gray;
      margin-right: 6px;
      font-size: 16px;
    }
  }
}
</style>
