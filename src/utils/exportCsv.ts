export function exportToCsv(data: any[], filename: string) {
  const headers = [
    'Employee Name',
    'Position',
    'Department',
    'Date',
    'Planned Time',
    'Actual Time',
    'Status',
    'Bonus',
    'Fine'
  ];

  const rows = data.map(record => [
    record.employee.name,
    record.employee.position,
    record.employee.department,
    record.record.date,
    record.record.plannedTime,
    record.record.actualTime,
    record.record.status,
    record.record.bonus,
    record.record.fine
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, filename);
  } else {
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}