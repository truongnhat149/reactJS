// scope 
// global
// local
// function
var name = 'khoa'

// destroy -> giải phóng bộ nhớ

{
    let name = 'truong'
    {
        {
            {
                let name = 'dung'
                console.log(name);
            }
        }
    }
    console.log(name)
}