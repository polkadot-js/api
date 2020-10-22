/// @title Test 256 bits types
/// @author Sean Young <sean@mess.org>
contract ints256 {
	/// Multiply two 256 bit values
	function multiply(uint256 a, uint256 b) public pure returns (uint256) {
		return a * b;
	}

	/// Add two 256 bit values
	function add(uint256 a, uint256 b) public pure returns (uint256) {
		return a + b;
	}
}
