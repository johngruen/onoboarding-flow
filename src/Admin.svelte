<style>
  .admin {
    background: rgba(255, 255, 255, .99);
    bottom: 10px;
    right: 10px;
    opacity: .98;
    position: fixed;
    padding: 20px;
    display: flex;
    width: 200px;
    user-select: none;
    opacity: 0;
  }

  .admin:hover {
    opacity: 1;
  }

  .toggle {
    flex: 0 0 24px;
  }
</style>

<div class="admin">
  <div class="toggle"> &lt; </div>
  <div>
    <h2>Admin</h2>
    <form>
      <label><input type="checkbox"/>show admin</label>
    </form>
  </div>
</div>