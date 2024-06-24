import './index.css';

const RecentStudies = ()=>{
    return(
        <div className="recent-studies-parent">
            <div className="recent-heading">
                <h2>Recent studies</h2>
            </div>
            <div>
                <div className='status-update'>
                    <h3>"dog bite complaint"</h3>
                    <div className='flex-status'>
                        <div className="time-day">
                            2 days ago
                        </div>
                        <div className="status">
                           <i className="fa fa-check"></i> completed
                        </div>
                    </div>

                </div>
                <div className='status-update'>
                    <h3>"the cyberbullying conspiracy"</h3>
                    <div className='flex-status'>
                        <div className="time-day">
                            2 days ago
                        </div>
                        <div className="status">
                           <i className="fa fa-check"></i> completed
                        </div>
                    </div>

                </div>
                <div className='status-update'>
                    <h3>"the data breach dilemma"</h3>
                    <div className='flex-status'>
                        <div className="time-day">
                            2 days ago
                        </div>
                        <div className="status">
                           <i className="fa fa-check"></i> completed
                        </div>
                    </div>

                </div>
                
                <div className='status-update'>
                    <h3>"the data breach dilemma"</h3>
                    <div className='flex-status'>
                        <div className="time-day">
                            2 days ago
                        </div>
                        <div className="status-progress">
                        <i className="fa fa-adjust"></i> In progress
                        </div>
                    </div>

                </div>
                <div className='status-update'>
                    <h3>"the data breach dilemma"</h3>
                    <div className='flex-status'>
                        <div className="time-day">
                            2 days ago
                        </div>
                        <div className="fail">
                        <i className="fa fa-dot-circle-o"></i> Failed
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
    
}
export default RecentStudies