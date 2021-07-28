import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ApexCharts from 'apexcharts'

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss']
})
export class PollVoteComponent implements OnInit {
  @Input() voted: boolean;
  @Input() options: string[];
  @Input() results: number[];
  @Input() questions: string;

  voteForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.voteForm = this.fb.group({
      selected: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    if (this.voted) {
      this.generateChart();
    }
  }

  submitForm(){
    console.log(this.voteForm.value);
  }

  generateChart() {
    const options: ApexCharts.ApexOptions = {
      chart: {
        type: 'bar'
      },
      series: [{
        name: 'Poll',
        data: this.results
      }],
      xaxis: {
        categories: this.options
      }
    }

    const chart = new ApexCharts(document.getElementById('poll-results'), options);
    chart.render();
  }
}
