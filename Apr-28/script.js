const dateInput = document.getElementById('taskDate');
        const saveBtn = document.getElementById('saveBtn');
        const statusMsg = document.getElementById('statusMsg');
        const rows = document.querySelectorAll('#taskTable tbody tr');

        // Set Today as Default
        dateInput.value = new Date().toISOString().split('T')[0];

        function clearTable() {
            rows.forEach(row => {
                row.querySelector('.task-input').value = "";
                row.querySelector('input[type="checkbox"]').checked = false;
            });
        }

        function loadTasks() {
            const date = dateInput.value;
            const data = JSON.parse(localStorage.getItem('proTasks')) || {};
            clearTable();
            if (data[date]) {
                data[date].forEach((item, i) => {
                    if (rows[i]) {
                        rows[i].querySelector('.task-input').value = item.task;
                        rows[i].querySelector('input[type="checkbox"]').checked = item.done;
                    }
                });
            }
        }

        function saveTasks() {
            const date = dateInput.value;
            const current = [];
            rows.forEach(row => {
                const task = row.querySelector('.task-input').value;
                const done = row.querySelector('input[type="checkbox"]').checked;
                if (task.trim()) current.push({ task, done });
            });

            const allData = JSON.parse(localStorage.getItem('proTasks')) || {};
            allData[date] = current;
            localStorage.setItem('proTasks', JSON.stringify(allData));
            
            statusMsg.innerText = "Tasks updated for " + date;
            setTimeout(() => statusMsg.innerText = "",);
        }

        dateInput.addEventListener('change', loadTasks);
        saveBtn.addEventListener('click', saveTasks);
        window.onload = loadTasks;