import { Navbar } from "./include/Navbar";

export function Dashboard(){




    return (<>
            {/* @include("user.includes.header")

@include("user.includes.sidebar")

@include("user.includes.navbar") */}
<Navbar/>
<div className="content">
 

   <div className="row">
      <div className="col-lg-12">
         <div className="PageHead">
            <div className="HeadTitle">
               <i className="mdi mdi-home"></i>
               <h4>Dashboard</h4>
            </div>
         </div>
      </div>
   </div>

    
    <div className="row">
        {/* <?php //print_r($userdetail)  ?> */}
        {/* @if($user_type==3 && $userdetail['transportation_doc_status']==0 && $userdetail['doc_file']=='') */}
        <h5>Your Account is Under Process <a href="">Click More</a></h5>
        {/* @elseif($user_type==3 && $userdetail['transportation_doc_status']==0 && $userdetail['doc_file']!='') */}
        <h5>Your Account is Waiting For Activation <a href="">Click More</a></h5>
        {/* @endif */}
        {/* <?php /* */}
        {/* @elseif($user_type==3 && $userdetail['transportation_doc_status']==1 && $userdetail['doc_file']!='') */}
        <h5>Need to Activate Account <a href="">Click More</a></h5>
        
    </div>
   <div className="row mb-4">
      <div className="col-lg-6 col-md-6 col-12">
         <div className="card">
            <div className="card-body dashboard-slider">
               <div id="demo" className="carousel slide" data-ride="carousel">
                 {/* <!-- Indicators --> */}
                 <ul className="carousel-indicators">
                   <li data-target="#demo" data-slide-to="0" className="active"></li>
                   <li data-target="#demo" data-slide-to="1"></li>
                   <li data-target="#demo" data-slide-to="2"></li>
                 </ul>
                 
                 {/* <!-- The slideshow --> */}
                 <div className="carousel-inner">
                   <div className="carousel-item active">
                     <img src="/user/assets/img/truck.jpeg" alt="Los Angeles" width="1100" height="500"/>
                   </div>
                   <div className="carousel-item">
                     <img src="/user/assets/img/trucks.jpeg" alt="Chicago" width="1100" height="500"/>
                   </div>
                   <div className="carousel-item">
                     <img src="/user/assets/img/truk.jpeg" alt="New York" width="1100" height="500"/>
                   </div>
                 </div>
                 
                 {/* <!-- Left and right controls --> */}
                 <a className="carousel-control-prev" href="#demo" data-slide="prev">
                   <span className="carousel-control-prev-icon"></span>
                 </a>
                 <a className="carousel-control-next" href="#demo" data-slide="next">
                   <span className="carousel-control-next-icon"></span>
                 </a>
               </div>
            </div>
         </div>
      </div>

      <div className="col-lg-6 col-md-6 col-12">
         <div className="Activity-info">
            <div className="card">
               <div className="card-header Activity-header">
                  <h5>Recent Activity</h5>
                  {/* <!-- <button className="" type="button">
                     <svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#333"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="feather feather-more-vertical text-gray-500">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                     </svg>
                  </button> --> */}
               </div>

               <div className="card-body">
                  <div className="timeline timeline-xs scroll-card">
                     {/* <!-- Timeline Item 1-->
                     
                     @if(isset($notifications) && !empty($notifications))
                     @foreach($notifications as $key =>$value) */}
                     <div className="timeline-item">
                        <div className="timeline-item-marker">
                           <div className="timeline-item-marker-text">
                            {/* 
                            date('d-m-y', strtotime($value['created_at'])) */}
                           </div>
                           <div className="timeline-item-marker-indicator bg-green"></div>
                        </div>
                        <div className="timeline-item-content" >
                           {/* @php 
                              $arr = explode(',',$value['subject']);
                              //print_r($arr);
                              for($i=0; $i < count($arr);$i++){
                              echo trans($arr[$i]);
                                //echo trans($value['subject']); 
                              }
                           @endphp */}
                           <a className="fw-bold text-dark" href="">Order #</a>
                            
                        </div>
                     </div>
                     {/* @endforeach
                     @else */}
                     <div className="timeline-item">
                        <div className="timeline-item-marker">
                           <div className="">No Record Found</div>
                        </div>
                     </div>
                     {/* @endif */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>

   {/* @if($user_type!=4)
    @if($user_type == '3')
      @php $arr = [trans("content.Total_Trucks"),trans("content.Total_Drivers"),trans("content.Total_CPR"),trans("content.Pending_CPR")];@endphp */}
      <div className="row">
    {/* @foreach($arr as $key => $value) */}
      {/* <div className="col-md-3">
        @if($key==0)
         <div className="card bg-blue text-white">
          {/* <?php $url=url("/")."/front_truck_list" ?>
        {/* @elseif($key==1) */} 
         <div className="card bg-yellow text-white">
          {/* <?php $url=url("/")."/front_driver_list" ?>
        {/* @elseif($key==2) */} 
         {/* <div className="card bg-green text-white"> */}
          {/* <?php $url=url("/")."/cpr_transporter" ?>
        {/* @elseif($key==3) */} 
         {/* <div className="card bg-red text-white"> */}
          {/* {/* <?php $url=url("/")."/cpr_transporter" ?> 
        @endif  */}

            <div className="card-body DashCardBody">
               <div className="d-flex justify-content-between align-items-center">
                  <div className="me-3">
                     <div className="text-white-75 small">
                        {/* 
                        $value */}
                     </div>
                     <div className="text-lg fw-bold">
                        {/* 
                        $count[$key] */}
                     </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="feather feather-calendar feather-xl text-white-50">
                     <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                     <line x1="16" y1="2" x2="16" y2="6"></line>
                     <line x1="8" y1="2" x2="8" y2="6"></line>
                     <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
               </div>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between small">
               <a href="<?php echo($url) ?>" className="text-white stretched-link">View</a>
            </div>
         </div>
      </div> 
    {/* @endforeach */}
   </div>
    {/* @else
      @php $arr = [trans("content.Created_CPR"),trans("content.Received_CPR"),trans("content.Pending_CPR"),trans("content.Total_Credit")];@endphp */}
      <div className="row">
    {/* @foreach($arr as $key => $value) */}
      <div className="col-md-3">
        {/* @if($key==0) */}
         <div className="card bg-blue text-white">
          {/* <?php $url=url("/")."/cpr_request" ?>
        @elseif($key==1) */}
         <div className="card bg-yellow text-white">
          {/* <?php $url=url("/")."/cpr_receive" ?>
        @elseif($key==2) */}
         <div className="card bg-green text-white">
          {/* <?php $url=url("/")."/cpr_request" ?>
        @elseif($key==3) */}
         <div className="card bg-red text-white">
          {/* <?php $url=url("/")."/credit" ?>
        @endif */}

            <div className="card-body DashCardBody">
               <div className="d-flex justify-content-between align-items-center">
                  <div className="me-3">
                     <div className="text-white-75 small">
                        {/* 
                        $value */}
                     </div>
                     <div className="text-lg fw-bold">
                        {/* 
                        $count[$key] */}
                     </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="feather feather-calendar feather-xl text-white-50">
                     <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                     <line x1="16" y1="2" x2="16" y2="6"></line>
                     <line x1="8" y1="2" x2="8" y2="6"></line>
                     <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
               </div>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between small">
               <a href="<?php echo($url) ?>" className="text-white stretched-link">View</a>
            </div>
         </div>
      </div> 
    {/* @endforeach */}
   </div>
    {/* @endif
   @endif */}
 <div className="cont">
   {/* @if(isset($cprs))
      @foreach($cprs as $key=> $value) */}
      
        <div className="row pt-3">
          <div className="col-md-3 cust-coll">
            <div className="card card-cust">
              <div className="card-header cust-head">
               cpr_heading
              </div>
              <div className="card-body body-cus">  
                <div className="card-cont">
                  <label>CPR No</label>
                  <p></p>
                </div>
                <div className="card-cont">
                  <label>Location Pickup</label>
                  <p>sender_address</p>
                </div>
                <div className="card-cont">
                  <label>Location Drop</label>
                  <p>receiver_address</p>
                </div>
              </div>  
            </div>
          </div>
          <div className="col-md-6 cust-coll">
            <div className="card card-cust">
              <div className="card-header cust-head">
                cpr_details_heading
              </div>
              <div className="card-body body-cus">
                <div className="row"> 
                  <div className="col-md-4">
                    <label>Sender Name</label>
                    <p>sender_name</p>
                  </div>
                  <div className="col-md-4">
                    <label>Receiver Name</label>
                    <p>receiver_name</p>
                  </div>
                  
                  {/* <!-- <div className="col-md-4">
                    <label>content.driver_Name</label>
                    <p>
         /             @if(' "              $res = App\User::where(['id'=>'                      @endphp
                      @else
                        Null
                      @endif 
                    </p>                
                  </div> --> */}

          <div className="col-md-4">
                    <label>Payment By</label>
                    <p>payment_by</p>
                  </div>
                  {/* <!-- <div className="col-md-4">
                    <label>Payment Mode</label>
          /          <p>
                     ' "           <div className="col-md-4">
                    <label>Amount</label>
                    <p>Currency price</p>
                  </div>

                  <div className="col-md-4">
           <label>Pickup Date/Time</label>
                    <p>pickup_date<br/>pickup_time</p>
                  </div>
                  <div className="col-md-4">
                    <label>Delivery Date</label>
                    <p>delivery_date</p>
                  </div>

                  {//'>"
                    <label>Transporter Name</label>
                    <p>transporter_name</p>
                  </div>
                 
                </div>
              </div>  
            
          </div>
          <div className="col-md-3 cust-coll">
            <div className="card card-cust">
              <div className="card-header cust-head">
                Action
              </div>
              <div className="card-body body-cus">  
                <div className="buttn">
                  <a className="btn btn-theme" href="cpr_detail/
                   $value['id'] "><i className="fa fa-eye ikon"></i></a>
                  
                  
                  
                       <a className="btn btn-success" href="">accept</a>
                       <a className="btn btn-danger" href="#" data-toggle="modal" data-target="#reject_modal"
                          onclick="Reject()"><i className="fa fa-times-circle ikon"></i></a>
                      
                        <a className="btn btn-success" href="">Stop drive</a>
                      
                      {/* @if($value['payment_by']=='Receiver will Pay'&&$value['payment_type']=='cash') */}
                      <p>Please Collect Payment From Reiver After Delivery</p>
                      {/* @elseif($value['payment_by']=='I will Pay'&&$value['payment_type']=='cash') */}
                      <p>Please Collect Payment From Sender Befor loading truck</p>

                      {/* @endif
                   @elseif($user_type==2)
                     @php
                       $where['status'] = 1;
                       $where['user_id'] = Auth::user()->id;
                       $where['transporter_id'] = $value['transporter_id'];
                       $res = DB::table('credit_amount_tb')->select('*')->where($where)->first();
                       if($res!=""){ */}
                         {/* if($res->amount >= $value['price']){
                          $credit_s_val = 'yes';
                         }else{
                          $credit_s_val = 'no';
                         }
                       }else{
                        $credit_s_val = 'no';
                       }
                     @endphp
                    @if($value['payment_by']=="Receiver will Pay" && $value['negotiation_msg']=='' && $value['receiver_id']==Auth::user()->id) */}
                      {/* 
                      --'if-elseif-if'--
                      @if($value['negotiation_msg']=='') */}
                        
                      
                       <div className="modal fade" id="exampleModalCenter
                       $value['id']" tabindex="-1" role="dialog"
                          aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-keyboard="false"
                          data-backdrop="static">
                          <div className="modal-dialog modal-dialog-centered" role="document">
                             <div className="modal-content">
                                <div className="modal-header">
                                   <h5 className="modal-title" id="exampleModalLongTitle">
                                    trans("content.Price Negotiation") 
                                   </h5>
                                   <button type="button" className="close close_model" data-dismiss="modal"
                                      aria-label="Close" id="close_model">
                                      <span aria-hidden="true">&times;</span>
                                   </button>
                                </div>
                                <form method="post" action="
                                url('negotiation_by_reciver')">
                                   
                                   <input type="hidden" name="cpr_id" value="
                                   $value['id']"/>
                                   <div className="modal-body">
                                      <textarea className="form-control" name="negotiation_by_reciver"
                                         placeholder="Enter Your Message" id="negotiation_by_reciver"></textarea>
                                   </div>
                                   <div className="modal-footer">
                                      <button type="button" className="btn btn-secondary close_model" data-dismiss="modal"
                                         id="close_model">
                                          trans("content.Close") </button>
                                      <button type="submit" className="btn btn-warning" id="send_msg2">Apply</button>
                                   </div>
                                </form>
                             </div>
                          </div>
                       </div>
                    {/* @endif
                    @if($value['sender_id'] != Auth::user()->id) */}
                      
                      <a className="btn btn-success" data-toggle="modal" data-target="#myModal" title="Approve"
                        onclick="Approve(`
                         url('/') /receiver_cpr_approve/1/
                         $value['id'] `,`
                         $value['transporter_id'] `,`
                         $value['price'] `,`
                        $value['payment_by']`,`
                        $credit_s_val`)"><i className="fa fa-check-circle ikon"></i></a>
                    

                    <a className="btn btn-danger" data-toggle="modal" data-target="#reject_modal" title="Reject" onclick="Reject(`
                     url('/') /receiver_cpr_approve/2/
                     $value['id'] `)"><i className="fa fa-times-circle ikon"></i></a>
                    
                    
                    
                       <a className="btn btn-success" href="#" data-toggle="modal" data-target="#approve_modal"
                          onclick="tr_Approve(`
                           url('/') /cpr_approve/1/
                           $value['id'] `)"><i className="fa fa-check-circle ikon"></i></a>
                       <a className="btn btn-danger" href="#" data-toggle="modal" data-target="#reject_modal"
                          onclick="Reject(`
                           url('/') /cpr_approve/2/
                           $value['id'] `)"><i className="fa fa-times-circle ikon"></i></a>
                    
                       <a className="btn btn-success" href="#" data-toggle="modal" data-target="#approve_modal"
                          onclick="tr_Approve(`
                           url('/') /cpr_approve/1/
                           $value['id'] `)"><i className="fa fa-check-circle ikon"></i></a>
                       <a className="btn btn-danger" href="#" data-toggle="modal" data-target="#reject_modal"
                          onclick="Reject(`
                           url('/') /cpr_approve/2/
                           $value['id'] `)"><i className="fa fa-times-circle ikon"></i></a>
                     
                   
                   
                   
                   <a className="btn btn-danger"
                      href="
                      url('negotiation_reject').'/'.$value['id']"><i className="fa fa-times-circle ikon"></i></a>

                   
                   <div className="modal fade" id="exampleModalCenter
                   $value['id']" tabindex="-1" role="dialog"
                      aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-keyboard="false"
                      data-backdrop="static">
                      <div className="modal-dialog modal-dialog-centered" role="document">
                         <div className="modal-content">
                            <div className="modal-header">
                               <h5 className="modal-title" id="exampleModalLongTitle">
                                trans("content.Price_Negotiated") 
                   
                               </h5>
                               <button type="button" className="close close_model" data-dismiss="modal"
                                  aria-label="Close" id="close_model">
                                  <span aria-hidden="true">&times;</span>
                               </button>
                            </div>
                            <form method="post" action="
                            url('coupon_by_transporter')">
                   

                   
                               <input type="hidden" name="transporter_id" value="
                               $value['transporter_id']"/>
                               <input type="hidden" name="total_price" value="
                               $value['price']"/>
                               <input type="hidden" name="cpr_id" value="
                               $value['id']"/>
                               <input type="hidden" name="sender_id" value="
                               $value['sender_id']"/>
                               <div className="modal-body">
                                  <textarea className="form-control" name="coupon_code"
                                     placeholder="Enter Your Discount" id="coupon_code"></textarea>
                                 
                               </div>
                               <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary close_model" data-dismiss="modal"
                                     id="close_model">Close</button>
                                  <button type="submit" className="btn btn-warning" id="send_msg">
                                   trans("content.apply_discount") </button>
                               </div>
                            </form>
                         </div>
                      </div>
                   </div>
                   
                   <input type="hidden" value="
                   $value['negotiation_by_transporter']" id="
                   $value['negotiation_by_transporter']"/>
                   <button onclick="myFunction('
                   ')"> </button>
                   <button type="button" className="btn btn-primary" data-toggle="modal"
                      data-target="#exampleModalCenter_coupon
                      $value['id']">
                       trans("content.Edit") </button>
                   
                   <div className="modal fade" id="exampleModalCenter_coupon
                   $value['id']" tabindex="-1"
                      role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"
                      data-keyboard="false" data-backdrop="static">
                      <div className="modal-dialog modal-dialog-centered" role="document">
                         <div className="modal-content">
                            <div className="modal-header">
                               <h5 className="modal-title" id="exampleModalLongTitle">Enter Coupon code
                               </h5>
                               <button type="button" className="close close_model" data-dismiss="modal"
                                  aria-label="Close" id="close_model">
                                  <span aria-hidden="true"></span>
                               </button>
                            </div>
                            <form method="post" action="
                            url('check_coupon')">
                              
                               <input type="hidden" name="cpr_id" value="
                               $value['id']"/>
                               <input type="hidden" name="transporter_id" value="
                               $value['transporter_id']"/>
                               <div className="modal-body">
                                  <div className="form-group">
                                     <label>Total Price</label>
                                     <input type="text" name="total_price" className="form-control"
                                        value="
                                        $value['price']" readonly=""/>
                                  </div>
                                  <div className="form-group">
                                     <label>Coupon Code</label>
                                     <input type="text" name="coupon_code" className="form-control"
                                        placeholder="Enter Coupon Code" required=""/>
                                  </div>
                               </div>
                               <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary close_model" data-dismiss="modal"
                                     id="close_model">Close</button>
                                  <button type="submit" className="btn btn-warning" id="send_msg">Submit</button>
                               </div>
                            </form>
                         </div>
                      </div>
                   </div>
                  
                  
                   <div className="modal fade" id="exampleModal_sender
                   $value['id']" tabindex="-1" role="dialog"
                      aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-keyboard="false"
                      data-backdrop="static">
                      <div className="modal-dialog modal-dialog-centered" role="document">
                         <div className="modal-content">
                            <div className="modal-header">
                               <h5 className="modal-title" id="exampleModalLongTitle">Price Negotiation
                               </h5>
                               <button type="button" className="close close_model" data-dismiss="modal"
                                  aria-label="Close" id="close_model">
                                  <span aria-hidden="true">&times;</span>
                               </button>
                            </div>
                            <form method="post" action="
                            url('negotiation_by_sender')">
                               @csrf
                               <input type="hidden" name="cpr_id" value="
                               $value['id']"/>
                               <div className="modal-body">
                                  <textarea className="form-control" name="negotiation_by_sender"
                                     placeholder="Enter Your Message" id="negotiation_by_sender"></textarea>
                               </div>
                               <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary close_model" data-dismiss="modal"
                                     id="close_model">Close</button>
                                  <button type="submit" className="btn btn-warning" id="send_msg2">Send
                                     Message</button>
                               </div>
                            </form>
                         </div>
                      </div>
                   </div>
                 
                   <a className="btn btn-success"
                      href="
                      url('sender_cpr_approve').'/'.$value['id']">Approve")</a>
                  
                   <a className="btn btn-danger" data-toggle="modal" data-target="#reject_modal"
                      onclick="Reject(`
                       url('/') /sender_cpr_reject/2/
                       $value['id'] `)"><i className="fa fa-times-circle ikon"></i></a>
                  
                   <a className="btn btn-danger"
                      href="
                      url('negotiation_reject').'/'.$value['id']"><i className="fa fa-times-circle ikon"></i></a>
                  
                   <div className="modal fade" id="exampleModalCenter
                   $value['id']" tabindex="-1" role="dialog"
                      aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-keyboard="false"
                      data-backdrop="static">
                      <div className="modal-dialog modal-dialog-centered" role="document">
                         <div className="modal-content">
                            <div className="modal-header">
                               <h5 className="modal-title" id="exampleModalLongTitle">
                                trans("content.Price_Negotiated") 
                  
                               </h5>
                               <button type="button" className="close close_model" data-dismiss="modal"
                                  aria-label="Close" id="close_model">
                                  <span aria-hidden="true"></span>
                               </button>
                            </div>
                            
                            <form method="post" action="
                            url('coupon_by_transporter_r')">
                  

                  
                               <input type="hidden" name="transporter_id" value="
                               $value['transporter_id']"/>
                               <input type="hidden" name="total_price" value="
                               $value['price']"/>
                               <input type="hidden" name="cpr_id" value="
                               $value['id']"/>
                               <input type="hidden" name="receiver_id" value="
                               $value['receiver_id']"/>
                               <div className="modal-body">
                                  <textarea className="form-control" name="coupon_code"
                                     placeholder="Enter Your Discount" id="coupon_code"></textarea>
                                  
                               </div>
                               <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary close_model" data-dismiss="modal"
                                     id="close_model">Close</button>
                                  <button type="submit" className="btn btn-warning" id="send_msg">
                                   trans("content.apply_discount") </button>
                               </div>
                            </form>
                            
                         </div>
                      </div>
                   </div>
                   
                   
                   <button type="button" className="btn btn-primary" data-toggle="modal"
                      data-target="#exampleModalCenter_coupon_reciver
                      $value['id']">
                       trans("content.Edit") </button>
                   
                   <div className="modal fade" id="exampleModalCenter_coupon_reciver
                   $value['id']" tabindex="-1"
                      role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"
                      data-keyboard="false" data-backdrop="static">
                      <div className="modal-dialog modal-dialog-centered" role="document">
                         <div className="modal-content">
                            <div className="modal-header">
                               <h5 className="modal-title" id="exampleModalLongTitle">Enter Coupon code
                               </h5>
                               <button type="button" className="close close_model" data-dismiss="modal"
                                  aria-label="Close" id="close_model">
                                  <span aria-hidden="true">&times;</span>
                               </button>
                            </div>
                            <form method="post" action="
                            url('check_coupon_reciver')">
                     
                               <input type="hidden" name="cpr_id" value="
                               $value['id']"/>
                               <input type="hidden" name="transporter_id" value="
                               $value['transporter_id']"/>
                               
                               <input type="hidden" name="user_status" value="sender"/>
                               
                               <input type="hidden" name="user_status" value="reciever"/>
                               
                               <div className="modal-body">
                                  <div className="form-group">
                                     <label>Total Price</label>
                                     <input type="text" name="total_price" className="form-control"
                                        value="
                                        $value['price']" readonly=""/>
                                  </div>
                                  <div className="form-group">
                                     <label>Coupon Code</label>
                                     <input type="text" name="coupon_code" className="form-control"
                                        placeholder="Enter Coupon Code" required=""/>
                                  </div>
                               </div>
                               <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary close_model" data-dismiss="modal"
                                     id="close_model">Close</button>
                                  <button type="submit" className="btn btn-warning" id="send_msg">Submit</button>
                               </div>
                            </form>
                         </div>
                      </div>
                   </div>
                   
                   
                   <div className="modal fade" id="exampleModal_sender
                   $value['id']" tabindex="-1" role="dialog"
                      aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-keyboard="false"
                      data-backdrop="static">
                      <div className="modal-dialog modal-dialog-centered" role="document">
                         <div className="modal-content">
                            <div className="modal-header">
                               <h5 className="modal-title" id="exampleModalLongTitle">Price Negotiation
                               </h5>
                               <button type="button" className="close close_model" data-dismiss="modal"
                                  aria-label="Close" id="close_model">
                                  <span aria-hidden="true">&times;</span>
                               </button>
                            </div>
                            <form method="post" action="
                            url('negotiation_by_sender')">
                   
                               <input type="hidden" name="cpr_id" value="
                               $value['id']"/>
                               <div className="modal-body">
                                  <textarea className="form-control" name="negotiation_by_sender"
                                     placeholder="Enter Your Message" id="negotiation_by_sender"></textarea>
                               </div>
                               <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary close_model" data-dismiss="modal"
                                     id="close_model">Close</button>
                                  <button type="submit" className="btn btn-warning" id="send_msg2">Send
                                     Message</button>
                               </div>
                            </form>
                         </div>
                      </div>
                   </div>
                   
                      <a className="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="Approve(`
                       url('/') /receiver_cpr_approve/1/
                       $value['id'] `,`
                       $value['transporter_id'] `,`
                       $value['price'] `,`
                      $value['payment_by']`,`
                      $credit_s_val`)">Approve")</a>
                   
                      <a className="btn btn-danger" data-toggle="modal" data-target="#reject_modal" onclick="Reject(`
                       url('/') /receiver_cpr_approve/2/
                       $value['id'] `)"><i className="fa fa-times-circle ikon"></i></a>
                   
                   <a className="btn btn-danger" data-toggle="modal" data-target="#reject_modal"
                      onclick="Reject(`
                       url('/') /sender_cpr_reject/2/
                       $value['id'] `)"><i className="fa fa-times-circle ikon"></i></a>
                   
                </div>
              </div>
            </div>
          </div>
        </div>
      
      <div>
         <h3>No CPR Request Found</h3>
      </div>
   
    </div>
   </div>

</div>



<div className="modal fade" id="view_modal" role="dialog">
   <div className="modal-dialog">

      <div className="modal-content">
         <div className="modal-header cust-modal-hedr-view">
            <h4 className="modal-title">Title</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
         </div>
         <div className="modal-body">
            <p>Content</p>
         </div>
         <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close")</button>
         </div>
      </div>
   </div>
</div>

<div className="modal fade" id="myModal" role="dialog">
   <div className="modal-dialog">

      <div className="modal-content">
         <div className="modal-header cust-modal-hedr-apr">
            <h4 className="modal-title">Payment type</h4>
            <button type="button" className="close" data-dismiss="modal">times</button>
         </div>
         <div className="modal-body custm-modal-body">
            <form className="forms-sample" method="post" id="app_reject_form" action="">

               <input type="hidden" id="transporter_id"/>
               <input type="hidden" id="cpr_price"/>
               <div className="form-group payment_type_div">
                  <input className="payment_type" type="radio" name="payment_type" value="Cash" required=""/>
                  
               </div>

               <div className="form-group payment_type_div" id="by_credit_point">
                  <input className="payment_type" type="radio" name="payment_type" value="Credit" required=""/>
                  
               </div>
               <div className="form-group payment_type_div">
                  <input className="payment_type" type="radio" name="payment_type" value="Credit Card" required=""/>
                  
               </div>
               <div className="btns d-flex justify-content-end">
                  <button type="submit" className="btn btn-gradient-primary mr-2 btn-mod">Approve</button>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </form>
         </div>
         
      </div>
   </div>
</div>

<div className="modal fade" id="reject_modal" role="dialog">
   <div className="modal-dialog">

      <div className="modal-content">
         <div className="modal-header cust-modal-hedr-reject">
            <h4 className="modal-title">Reason")</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
         </div>
         <div className="modal-body">
            <form className="forms-sample" method="post">

               <div className="form-group  reject_reason_div">
                  <textarea className="reject_reason form-control" name="reject_reason" required="" placeholder="Drop Your Message Here......"></textarea>
               </div>
               <div className="btns d-flex justify-content-end">
                  <button type="submit" className="btn btn-gradient-primary mr-2 btn-mod">Reject")</button>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close")</button>
                </div>
            </form>
         </div>

      </div>
   </div>
</div>



<div className="modal fade" id="approve_modal" role="dialog">

   <div className="modal-dialog">



      <div className="modal-content">

         <div className="modal-header">

            <h4 className="modal-title">Select driver")</h4>

            <button type="button" className="close" data-dismiss="modal">&times;</button>

         </div>

         <div className="modal-body">

            <form className="forms-sample" method="post" id="trans_url">
               
               <div className="form-group driver_div" id="driver_div_
                $key ">
                  <input className="driver_id" type="radio" name="driver_id" value="
                   $value['id'] "
                     required=""/>
                      $value['name'] 
               </div>
               
               
               <button type="submit" className="btn btn-gradient-primary mr-2">Approve")</button>
               
               <p>All Driver Booked")</p>
               
               <button type="button" className="btn btn-default float-right" data-dismiss="modal">Close</button>
            </form>
            
         </div>
         
         <div className="modal-footer">
            

         </div>

      </div>

   </div>
</div>
</div>


    </>);
}


