let deleteSno = null; 
function openUpdateModal(sno, title, desc) { 
  document.getElementById('modal-sno').value = sno; 
  document.getElementById('modal-title').value = title; 
  document.getElementById('modal-desc').value = desc; 
  document.getElementById('updateForm').action = '/update/' + sno; 
 
  document.getElementById('modalOverlay').style.display = 'block'; 
  const modal = document.getElementById('updateModal'); 
  modal.style.display = 'block'; 
  setTimeout(() => modal.classList.add('show'), 10); 
} 
 
function closeUpdateModal() { 
  document.getElementById('modalOverlay').style.display = 'none'; 
  const modal = document.getElementById('updateModal'); 
modal.classList.remove('show'); 
setTimeout(() => modal.style.display = 'none', 300); 
} 
function openDeleteModal(sno) { 
deleteSno = sno; 
document.getElementById('modalOverlay').style.display = 'block'; 
const modal = document.getElementById('deleteModal'); 
modal.style.display = 'block'; 
setTimeout(() => modal.classList.add('show'), 10); 
} 
function closeDeleteModal() { 
deleteSno = null; 
document.getElementById('modalOverlay').style.display = 'none'; 
const modal = document.getElementById('deleteModal'); 
modal.classList.remove('show'); 
setTimeout(() => modal.style.display = 'none', 300); 
} 
document.getElementById('confirmDeleteBtn').addEventListener('click', function() { 
if (deleteSno !== null) { 
window.location.href = "/delete/" + deleteSno; 
} 
});