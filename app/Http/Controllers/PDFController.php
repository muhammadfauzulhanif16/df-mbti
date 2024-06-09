<?php
  
  namespace App\Http\Controllers;
  
  use Barryvdh\DomPDF\Facade\Pdf;
  use Inertia\Inertia;
  
  class PDFController extends Controller
  {
    public function exportPDF()
    {
      $data = [
        'title' => 'Welcome to PDF',
        'date' => date('m/d/Y'),
      ];
      
      $pdf = Pdf::loadView('pdf.test', $data);
      return $pdf->download('1.pdf');
    }
    
    public function showExportPage()
    {
      return Inertia::render('ExportPDF');
    }
  }
