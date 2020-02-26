window.onload = ()=>{
  one = ()=>{
    let elements = document.getElementById('content')
    elements.style.display = 'none';


    var newElement = document.createElement("P");
    newElement.style.padding = "10px 200px 10px 300px"
    newElement.style.fontFamily = "sans-serif";
    newElement.innerHTML = "Algorithm is a step-by-step procedure, which defines a set of instructions to be executed in a certain order to get the desired output. <br> <br>Algorithms are generally created independent of underlying languages, i.e. an algorithm can be implemented in more than one programming language.There are no well-defined standards for writing algorithms.<br><br> Rather, it is problem and resource dependent. Algorithms are never written to support a particular programming code.As we know that all programming languages share basic code constructs like loops (do, for, while), flow-control (if-else), etc. These common constructs can be used to write an algorithm.We write algorithms in a step-by-step manner, but it is not always the case. <br><br>Algorithm writing is a process and is executed after the problem domain is well-defined. That is, we should know the problem domain, for which we are designing a solution. <br><br> Time complexity of an algorithm represents the amount of time required by the algorithm to run to completion. Time requirements can be defined as a numerical function T(n), where T(n) can be measured as the number of steps, provided each step consumes constant time. <br><br> For example, addition of two n-bit integers takes n steps. Consequently, the total computational time is T(n) = c ∗ n, where c is the time taken for the addition of two bits. Here, we observe that T(n) grows linearly as the input size increases.";
    document.getElementById("contentKaBaap").appendChild(newElement);



  }
  home = ()=>{
    let elements = document.getElementById('content')
    elements.style.display = 'block';
    
  }
}
