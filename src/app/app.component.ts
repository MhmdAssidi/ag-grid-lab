import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'description', headerName: 'Description',editable:true },
    { field: 'price', headerName: 'Price',  valueFormatter: (params) => `$${params.value.toFixed(2)}` },
    {
  headerName: 'Status',
  field: 'status',
  cellRenderer: (params: ICellRendererParams) => {
    const value = params.value as string;
    const color = value === 'Available' ? '#4caf50' : '#f44336';

    return `
      <span style="
        display: inline-block;
        padding: 4px 10px;
        background: ${color};
        color: white;
        font-weight: bold;
        font-size: 16px;
      ">
        ${value}
      </span>
    `;
  }
}

  ];

  rowData = [
    { id: 1, name: 'Product A', description: 'First item', price: 10, status: 'Available' },
    { id: 2, name: 'Product B', description: 'Second item', price: 20, status: 'Out of Stock' },
    { id: 3, name: 'Product C', description: 'Third item', price: 30, status: 'Available' },
  ];
  pageSize = 2;

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1
  };
  
}
