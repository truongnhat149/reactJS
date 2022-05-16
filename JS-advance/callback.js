// phải là 1 hàm
// phải truyền hàm khác như là 1 tham số
// phải được thực thi

function callback(n1, n2) {
    return n1 + n2;
}

function useCallback(callback) {
    console.log(callback(5, 789));
}
useCallback(callback);