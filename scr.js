function fun(x){
    if(x==0){
        document.write('<br/><div align="center"><lable for=" ">Name : </lable><input type="text" required><br/><br/><input type="submit" value="Search"></div>');
        document.write('<br/><table align="center" border="1px" cellspacing="7px"><h2 align="center">Displaying All Records</h2><br><thead><tr><th>Sr No.</th><th>Name</th><th>Date</th></tr></thead></table>');
    }
    else{
        document.write('<br/><div align="center"><lable for=" ">From Date : </lable><input type="date" required><br/><br/>To Date : </lable><input type="date" required><br/><br/><input type="submit" value="Search"></div>');
        document.write('<br/><table align="center" border="1px" cellspacing="7px"><h2 align="center">Displaying All Records</h2><br><thead><tr><th>Sr No.</th><th>Name</th><th>Date</th></tr></thead></table>');
    }
    return
}