/**

 * author  张高瑞 创建

 * date 2019-09-13 16:33
 */
function changeActive(currBtn){
	currBtn.className='btn active';
	lastActiveBtn.className='btn';
	lastActiveBtn=currBtn;
}