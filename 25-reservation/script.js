const container = document.querySelector('.container');
const count = document.getElementById('count')
const amount = document.getElementById('amount')
const select = document.getElementById('movie')

container.addEventListener('click',function(e) {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected')
        calculateTotal()
    }
});

select.addEventListener('change',function(e){
    calculateTotal()
})

function calculateTotal() {
    let selectedSeats =container.querySelectorAll('.seat.selected')   
    let selectedSeatCount = selectedSeats.length
    let price = select.value
    count.innerText=selectedSeatCount
    amount.innerText=selectedSeatCount*price
}