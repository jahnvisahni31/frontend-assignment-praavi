export function exportToCsv(filteredData: any[], p0: string) {
  const csvContent = "data:text/csv;charset=utf-8,Date,Planned Time,Actual Time,Fine/Bonus,Error,Final Att.\n";
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "attendance.csv");
  document.body.appendChild(link);
  link.click();
}
