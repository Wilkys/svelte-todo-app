<script>
  import shortid from 'shortid'
  import { todos, saveStorage } from '~/store'

  let title = ''

  function createTodo() {
    if(!title || !title.trim()) return // 타이틀이 없거나, 공백문자로 되어있을 경우 종료      

    $todos.unshift({  // 배열 앞쪽에 밀어넣는 함수. 반대는 push
      id: shortid.generate(), // 고유한 아이디를 생성하는 함수 (및 패키지)
      title
    })
    $todos = $todos
    saveStorage()

    title = ''
    console.log($todos)
  }
</script>

<div class="create-todo">
  <input 
      bind:value={title} 
      type="text" 
      class="form-control" 
      on:keyup={(e) => {
        if(e.key ==='Enter') createTodo()
      }}/>
      <button 
        class="btn btn-primary"
        on:click={createTodo}>
        Create Todo!
      </button>
</div>

<style lang="scss">
  .create-todo { 
    display: flex;
    margin-top: 50px;
    .btn {
      width: 130px;
      height: 50px;
      font-weight: 700;
      margin-left: 10px;
      flex-shrink: 0;
    }
  }
</style>